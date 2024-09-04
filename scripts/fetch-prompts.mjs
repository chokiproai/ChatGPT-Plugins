import fetch from "node-fetch";
import fs from "fs/promises";

const RAW_FILE_URL = "https://raw.githubusercontent.com/";
const MIRRORF_FILE_URL = "http://raw.fgit.ml/";

const RAW_VI_URL = "chokiproai/prompt/main/vi.json";
const VI_URL = MIRRORF_FILE_URL + RAW_VI_URL;
const RAW_EN_URL = "f/awesome-chatgpt-prompts/main/prompts.csv";
const EN_URL = MIRRORF_FILE_URL + RAW_EN_URL;
const FILE = "./public/prompts.json";

const ignoreWords = ["Astringent", "Charm", "Astringent"];

const timeoutPromise = (timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Request timeout"));
    }, timeout);
  });
};

async function fetchVI() {
  console.log("[Fetch] fetching vi prompts...");
  try {
    const response = await Promise.race([fetch(VI_URL), timeoutPromise(5000)]);
    const raw = await response.json();
    return raw
      .map((v) => [v.act, v.prompt])
      .filter(
        (v) =>
          v[0] &&
          v[1] &&
          ignoreWords.every((w) => !v[0].includes(w) && !v[1].includes(w)),
      );
  } catch (error) {
    console.error("[Fetch] failed to fetch vi prompts", error);
    return [];
  }
}

async function fetchEN() {
  console.log("[Fetch] fetching en prompts...");
  try {
    // const raw = await (await fetch(EN_URL)).text();
    const response = await Promise.race([fetch(EN_URL), timeoutPromise(5000)]);
    const raw = await response.text();
    return raw
      .split("\n")
      .slice(1)
      .map((v) =>
        v
          .split('","')
          .map((v) => v.replace(/^"|"$/g, "").replaceAll('""', '"'))
          .filter((v) => v[0] && v[1]),
      );
  } catch (error) {
    console.error("[Fetch] failed to fetch en prompts", error);
    return [];
  }
}

async function main() {
  Promise.all([fetchVI(), fetchEN()])
    .then(([vi, en]) => {
      fs.writeFile(FILE, JSON.stringify({ vi, en }));
    })
    .catch((e) => {
      console.error("[Fetch] failed to fetch prompts");
      fs.writeFile(FILE, JSON.stringify({ vi: [], en: [] }));
    })
    .finally(() => {
      console.log("[Fetch] saved to " + FILE);
    });
}

main();
