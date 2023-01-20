import { api } from "../utils/api";
import { TypeAnimation } from "react-type-animation";

const GuestbookEntries = () => {
    const { data: guestbookEntries, isLoading } = api.guestBook.getAll.useQuery();

    if (isLoading === true) {
        return (
          <div className="mt-10 text-center font-mono text-xl font-semibold tracking-widest text-white subpixel-antialiased">
            <TypeAnimation
              sequence={[
                "Fetching Messages",
                62,
                "Fetching Messages.",
                125,
                "Fetching Messages..",
                250,
                "Fetching Messages...",
                500,
              ]}
              wrapper="div"
              cursor={false}
              repeat={Infinity}
            />
          </div>
        );
      }

    return(
        <div
        className="flex flex-col items-center justify-between bg-[#0B1025]"
        >
            <h1
            className="font-bold text-4xl text-skin-base my-4 leading-tight lg:text-7xl tracking-tighter mb-6 
            bg-gradient-to-r bg-clip-text text-transparent 
            from-[#15EFFB] via-[#110CE2] to-purple-500
            animate-text"
            >Guest Logs</h1>
            {guestbookEntries?.map((entry, idx) => {
                return(
                    <div key={idx} className="w-9/12 text-[#030514] bg-[#5191FA] flex flex-col py-4 px-7 my-2 rounded-3xl text-white">
                        <p
                        className="text-md sm:text-2xl"
                        >{entry.message}</p>
                        <h3
                        className="text-xs sm:text-base "
                        >{entry.name}</h3>
                    </div>
                );
            })}
        </div>
    )
}

export default GuestbookEntries