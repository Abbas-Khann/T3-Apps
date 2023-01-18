import { api } from "../utils/api";

const GuestbookEntries = () => {
    const { data: guestBookEntries, isLoading } = api.guestBook.getAll.useQuery();

    if(isLoading) {
        return(
            <div>
                Fetching Messages
            </div>
        )
    }

    return(
        <div
        className="flex flex-col gap-4"
        >
            {guestBookEntries?.map((entry, idx) => {
                return(
                    <div
                    key={idx}
                    >
                    <p>{entry.message}</p>
                    <span>{entry.name}</span>
                    </div>
                )
            })}
        </div>
    )
}