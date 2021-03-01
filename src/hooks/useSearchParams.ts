/**
 * Для более удобной работы с параметрами запроса
 * @param {string} search - строка с параметрами начинающаяся с ?
 * @returns {URLSearchParams}
 */
export function useSearchParams(search: string) {
    return new URLSearchParams(search)
}