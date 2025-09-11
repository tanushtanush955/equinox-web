const Help = () => {
    const [query, setQuery] = useState('');
    const [answer, setAnswer] = useState('');
    const [loading, setLoading] = useState(false);

    const handleGeminiQuery = async () => {
        setLoading(true);
        setAnswer('');
        try {
            const userPrompt = `
                You are a helpful assistant for the Equinox website.
                Your goal is to provide concise and helpful answers to user questions.

                ---

                Here is the user's question:
                ${query}

                ---

                Answer the question based on the context of the Equinox website.
                If the question is not related to the website, politely explain that you can only answer questions about Equinox.
            `;

            const payload = {
                contents: [{ parts: [{ text: userPrompt }] }],
            };

            const apiKey = "";
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error(`API call failed with status: ${response.status}`);
            }

            const result = await response.json();
            const candidate = result.candidates?.[0];
            const generatedText = candidate?.content?.parts?.[0]?.text;

            if (generatedText) {
                setAnswer(generatedText);
            } else {
                setAnswer("Sorry, I couldn't get a response from the API. Please try again later.");
            }

        } catch (error) {
            console.error("Error calling Gemini API:", error);
            setAnswer("Sorry, there was an error processing your request. Please check the console for details.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="main-content help-content">
            <h2 className="title-text">Help Center</h2>
            <p className="description-text">
                ...
            </p>
            <div className="query-section">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="e.g., What are your products?"
                    className="query-input"
                />
                <button
                    onClick={handleGeminiQuery}
                    className="query-button"
                    disabled={loading}
                >
                    {loading ? 'Thinking...' : 'Get an answer ✨'}
                </button>
                {answer && (
                    <div className="answer-box">
                        <p>{answer}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Help;