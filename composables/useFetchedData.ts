
export async function useFetchedData(): Promise<string> {
    // Return placeholder value on server immediately
    if (process.server) {
        return 'SERVERTIME'
    }

    const result = await (await fetch("http://worldtimeapi.org/api/timezone/Europe/Amsterdam")).json()
    return result['utc_datetime']
}