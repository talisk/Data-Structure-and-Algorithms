/**
 * 
 */

function permute(nums) {
    const result = []
    function dfs(cur = [], rest) {
        if (!rest.length) {
            result.push(cur)
        }
        for (let i = 0; i < rest.length; i++) {
            let item = rest[i];
            cur.push(item)
            dfs(cur, rest.filter((_, index) => i !== index))
        }
    }
    dfs([], nums)
    return result
}