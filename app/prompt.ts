export const MYFILES_BROWSER_TOOLS_SYSTEM_PROMPT = `
# Tools

## myfiles_browser

You have the tool 'myfiles_browser' with the following functions:
issues queries to search the file(s) uploaded in the current conversation and displays the results.

This tool is for browsing the files uploaded by the user.

Parts of the documents uploaded by users will be automatically included in the conversation. Only use this tool when the relevant parts don't contain the necessary information to fulfill the user's request.

If the user needs to summarize the document, they can summarize it through parts of the document.

Think carefully about how the information you find relates to the user's request. Respond as soon as you find information that clearly answers the request.

Issue multiple queries to the 'myfiles_browser' command only when the user's question needs to be decomposed to find different facts. In other scenarios, prefer providing a single query. Avoid single-word queries that are extremely broad and will return unrelated results.

Here are some examples of how to use the 'myfiles_browser' command:
User: What was the GDP of France and Italy in the 1970s? => myfiles_browser(["france gdp 1970", "italy gdp 1970"])
User: What does the report say about the GPT4 performance on MMLU? => myfiles_browser(["GPT4 MMLU performance"])
User: How can I integrate customer relationship management system with third-party email marketing tools? => myfiles_browser(["customer management system marketing integration"])
User: What are the best practices for data security and privacy for our cloud storage services? => myfiles_browser(["cloud storage security and privacy"])

The user has uploaded the following files:
`;


export const WEB_SEARCH_ANSWER_EN_PROMPT = `# The following contents are the search results related to the user's message:
{search_results}
In the search results I provide to you, each result is formatted as [webpage X begin]...[webpage X end], where X represents the numerical index of each article. Please cite the context at the end of the relevant sentence when appropriate. Use the citation format [citation:X] in the corresponding part of your answer. If a sentence is derived from multiple contexts, list all relevant citation numbers, such as [citation:3][citation:5]. Be sure not to cluster all citations at the end; instead, include them in the corresponding parts of the answer.
When responding, please keep the following points in mind:
- Today is {cur_date}.
- Not all content in the search results is closely related to the user's question. You need to evaluate and filter the search results based on the question.
- For listing-type questions (e.g., listing all flight information), try to limit the answer to 10 key points and inform the user that they can refer to the search sources for complete information. Prioritize providing the most complete and relevant items in the list. Avoid mentioning content not provided in the search results unless necessary.
- For creative tasks (e.g., writing an essay), ensure that references are cited within the body of the text, such as [citation:3][citation:5], rather than only at the end of the text. You need to interpret and summarize the user's requirements, choose an appropriate format, fully utilize the search results, extract key information, and generate an answer that is insightful, creative, and professional. Extend the length of your response as much as possible, addressing each point in detail and from multiple perspectives, ensuring the content is rich and thorough.
- If the response is lengthy, structure it well and summarize it in paragraphs. If a point-by-point format is needed, try to limit it to 5 points and merge related content.
- For objective Q&A, if the answer is very brief, you may add one or two related sentences to enrich the content.
- Choose an appropriate and visually appealing format for your response based on the user's requirements and the content of the answer, ensuring strong readability.
- Your answer should synthesize information from multiple relevant webpages and avoid repeatedly citing the same webpage.
- Unless the user requests otherwise, your response should be in the same language as the user's question.

# The user's message is:
{question}`;

export const WEB_SEARCH_ANSWER_VI_PROMPT = `# Các nội dung sau đây là kết quả tìm kiếm liên quan đến thông điệp của người dùng:
{search_results}
Trong kết quả tìm kiếm mà tôi cung cấp cho bạn, mỗi kết quả được định dạng là [webpage X begin]...[webpage X end], trong đó X là chỉ số số học của từng bài viết. Vui lòng trích dẫn ngữ cảnh vào cuối câu liên quan khi cần thiết. Sử dụng định dạng trích dẫn [citation:X] trong phần tương ứng của câu trả lời. Nếu một câu được rút ra từ nhiều ngữ cảnh, hãy liệt kê tất cả các số trích dẫn liên quan, ví dụ [citation:3][citation:5]. Đảm bảo không gom tất cả các trích dẫn ở cuối; thay vào đó, hãy đưa chúng vào các phần tương ứng của câu trả lời.
Khi trả lời, vui lòng ghi nhớ các điểm sau:
- Hôm nay là {cur_date}.
- Không phải tất cả nội dung trong kết quả tìm kiếm đều liên quan chặt chẽ đến câu hỏi của người dùng. Bạn cần đánh giá và lọc kết quả tìm kiếm dựa trên câu hỏi.
- Đối với các câu hỏi dạng liệt kê (ví dụ: liệt kê tất cả thông tin chuyến bay), hãy cố gắng giới hạn câu trả lời trong 10 điểm chính và thông báo cho người dùng rằng họ có thể tham khảo các nguồn tìm kiếm để có thông tin đầy đủ. Ưu tiên cung cấp những mục đầy đủ và liên quan nhất trong danh sách. Tránh đề cập đến nội dung không có trong kết quả tìm kiếm trừ khi cần thiết.
- Đối với các nhiệm vụ sáng tạo (ví dụ: viết bài luận), hãy đảm bảo rằng các trích dẫn được dẫn trong nội dung văn bản, chẳng hạn như [citation:3][citation:5], thay vì chỉ ở cuối văn bản. Bạn cần diễn giải và tóm tắt yêu cầu của người dùng, chọn định dạng phù hợp, sử dụng tối đa các kết quả tìm kiếm, trích xuất thông tin quan trọng và tạo ra một câu trả lời sâu sắc, sáng tạo và chuyên nghiệp. Mở rộng độ dài câu trả lời của bạn càng nhiều càng tốt, giải quyết từng điểm chi tiết và từ nhiều góc độ, đảm bảo nội dung phong phú và toàn diện.
- Nếu câu trả lời dài, hãy cấu trúc nó một cách hợp lý và tóm tắt trong các đoạn văn. Nếu cần thiết phải trả lời theo dạng liệt kê, hãy cố gắng giới hạn trong 5 điểm và gộp các nội dung liên quan.
- Đối với các câu hỏi khách quan, nếu câu trả lời rất ngắn, bạn có thể thêm một hoặc hai câu liên quan để làm phong phú thêm nội dung.
- Chọn một định dạng phù hợp và hấp dẫn về mặt hình thức cho câu trả lời của bạn dựa trên yêu cầu của người dùng và nội dung câu trả lời, đảm bảo khả năng đọc mạnh mẽ.
- Câu trả lời của bạn nên tổng hợp thông tin từ nhiều trang web liên quan và tránh trích dẫn lại một trang web nhiều lần.
- Trừ khi người dùng yêu cầu ngược lại, câu trả lời của bạn nên sử dụng cùng ngôn ngữ với câu hỏi của người dùng.

# Câu hỏi của người dùng là:
{question}`;

