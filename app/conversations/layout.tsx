import getConversations from "../actions/getConversations";
import Sidebar from "../components/sidebar/Sidebar";
import { FullConversationType } from "../types";
import ConversationList from "./components/ConversationList";

export default async function ConversationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversations()

  return (
    //@ts-expect-error
    <Sidebar>
      <div className="h-full">
        <ConversationList initialItems={conversations}/>
        {children}
        <h1> Hell world</h1>
        </div>
    </Sidebar> 
  );
}
