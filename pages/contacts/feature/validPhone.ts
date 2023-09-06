export const validAdditionalPhone = (num: string) => {
    return num.replace(/^\+?(\d)(\d{3})(\d{3})(\d{2})(\d{2})$/, '+$1 ($2) $3-$4-$5')
}
export const validPhone  = (num: string) => {
    return num.replace(/^\+?(\d)(\d{3})(\d{3})(\d{2})(\d{2})$/, '8 $2 $3-$4-$5')
}
