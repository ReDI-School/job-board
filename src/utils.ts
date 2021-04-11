export const formatDate = (isoDate: string): string => {
    try {
        const hoursAgo = Math.floor(
            (new Date(isoDate).getTime() - Date.now()) / (1000 * 60 * 60)
        );
        /* tslint:disable-next-line */
        const rtf = new Intl.RelativeTimeFormat('en');

        if (hoursAgo < 24) {
            return rtf.format(hoursAgo, 'hour');
        }
        return rtf.format(Math.floor(hoursAgo / 24), 'day');
    } catch {
        return '';
    }
};
