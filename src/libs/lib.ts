export const validateURL = (str :string) => {
    const pattern = new RegExp('^(https?:\\/\\/)?'+ // optional protocol
    '(([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.([a-z\\.]{2,}))'+ // domain name & must include dot
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
}

export const formattingNumber = (num : number) => {
    return num / 1_000_000 > 1
    ? `${(num / 1_000_000).toFixed(1)}M`
    : num / 1_000 > 1
    ? `${(num / 1_000).toFixed(1)}K`
    : num
}