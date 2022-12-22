export const getPage = () => {
    if(typeof window === "undefined") return null
    const { host } = window.location;
    let isDev = host.includes('localhost');
    let splitHost = host.split('.');

    if ((!isDev && splitHost.length === 3) || (isDev && splitHost.length === 2)) {
        let page = splitHost[0];
        if (page === 'www') {
            return null;
        }

        return page;
    }
}

// Get page server
export const getPageServer = (host) => {
    let isDev = host.includes('localhost');
    let splitHost = host.split('.');

    if ((!isDev && splitHost.length === 3) || (isDev && splitHost.length === 2)) {
        let page = splitHost[0];
        if (page === 'www') {
            return null;
        }

        return page;
    }
}