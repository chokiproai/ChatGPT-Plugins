import styles from "./auth.module.scss";
import { IconButton } from "./button";
import { useNavigate } from "react-router-dom";
import { Path } from "../constant";
import { useAccessStore } from "../store";
import Locale from "../locales";
import BotIcon from "../icons/bot.svg";
import { useEffect } from "react";
import { getClientConfig } from "../config/client";

export function AuthPage() {
  const navigate = useNavigate();
  const accessStore = useAccessStore();

  const goHome = () => navigate(Path.Home);
  const goChat = () => navigate(Path.Chat);

  const resetAccessCode = () => {
    accessStore.update((access) => {
      access.openaiApiKey = "";
      access.accessCode = "";
      access.googleApiKey = "";
    });
  };

  useEffect(() => {
    if (getClientConfig()?.isApp) {
      navigate(Path.Settings);
    }
  }, []);

  return (
    <div className={styles.authPage}>
      <div className={styles.authFormContainer}>
        <div className={styles.authLogo}>
          <BotIcon />
        </div>

        <h1 className={styles.authTitle}>{Locale.Auth.Title}</h1>
        <p className={styles.authTips}>{Locale.Auth.Tips}</p>

        <div className={styles.inputGroup}>
          <input
            className={styles.authInput}
            type="password"
            placeholder={Locale.Auth.Input}
            value={accessStore.accessCode}
            onChange={(e) => {
              accessStore.update(
                (access) => (access.accessCode = e.currentTarget.value),
              );
            }}
          />
        </div>

        {!accessStore.hideUserApiKey ? (
          <>
            <p className={`${styles.authTips} ${styles.subTips}`}>
              {Locale.Auth.SubTips}
            </p>
            <div className={styles.inputGroup}>
              <input
                className={styles.authInput}
                type="password"
                placeholder={Locale.Settings.Access.OpenAI.ApiKey.Placeholder}
                value={accessStore.openaiApiKey}
                onChange={(e) => {
                  accessStore.update(
                    (access) => (access.openaiApiKey = e.currentTarget.value),
                  );
                }}
              />
            </div>
            <div className={styles.inputGroup}>
              <input
                className={styles.authInput}
                type="password"
                placeholder={Locale.Settings.Access.Google.ApiKey.Placeholder}
                value={accessStore.googleApiKey}
                onChange={(e) => {
                  accessStore.update(
                    (access) => (access.googleApiKey = e.currentTarget.value),
                  );
                }}
              />
            </div>
          </>
        ) : null}

        <div className={styles.authActions}>
          <IconButton
            text={Locale.Auth.Confirm}
            className={`${styles.button} ${styles.buttonPrimary}`}
            onClick={goChat}
          />
          <IconButton
            text={Locale.Auth.Later}
            className={`${styles.button} ${styles.buttonSecondary}`}
            onClick={() => {
              resetAccessCode();
              goHome();
            }}
          />
        </div>
      </div>
    </div>
  );
}
