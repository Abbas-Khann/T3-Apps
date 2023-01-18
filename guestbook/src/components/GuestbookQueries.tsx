import { api } from "../utils/api";

const GuestbookEntries = () => {
    const { data: guestbookEntries, isLoading } = api.guestBook.getAll.useQuery();

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
            {guestbookEntries?.map((entry, idx) => {
                return(
                    <div key={idx}>
                        <p>{entry.message}</p>
                        <h3>{entry.name}</h3>
                    </div>
                );
            })}
        </div>
    )
}

export default GuestbookEntries