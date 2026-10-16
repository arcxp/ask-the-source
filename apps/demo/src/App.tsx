import { AskProvider, AskChat } from "@arcxp/ask-the-source-components";

function App() {
    // Wire the components to the Ask the Source API. `AskProvider` builds the SDK
    // client from this config and exposes it to every component/hook below it.
    return (
        <AskProvider
            baseUrl={import.meta.env.VITE_ARC_ASK_BASE_URL}
            website={import.meta.env.VITE_ARC_ASK_WEBSITE || "my-site"}
            apiKey={import.meta.env.VITE_ARC_ASK_API_KEY}
        >
            <AskChat />
        </AskProvider>
    );
}

export default App;
