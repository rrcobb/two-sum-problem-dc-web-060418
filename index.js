function bruteForceTwoSum(arr, target) {
    let sums = []
    for(let i = 0; i < arr.length; i++) {
        let num = arr[i]
        for (let j = i + 1; j < arr.length; j++) {
            let test = arr[j]
            if (num + test === target) {
                sums.push([num, test])
            }
        }
    }
    return sums
}

function binarySearchTwoSum(arr, target) {
    let sums = []
    let sorted = arr.sort()
    let seen = new Set()
    for(let i = 0; i < arr.length; i++) {
        let num = arr[i]
        let match = binaryMatch(sorted, target - num)
        if(match && !seen.has(num)) {
            seen.add(num)
            seen.add(target - num)
            sums.push([num, target - num])
        }
    }
    return sums
 }

 // binary searches a sorted array for a number
 function binaryMatch(sorted, num) {
     if (sorted.length === 0) {
         return false
     }
     let mid = Math.floor(sorted.length / 2);
     let guess = sorted[mid]
     if (guess === num) {
         return true
     } else if (guess < num) {
        return binaryMatch(sorted.slice(mid), num)
     } else {
         return binaryMatch(sorted.slice(0, mid), num)
     }
 }

 function hashTwoSum(arr, target) {
    let set = arr.reduce((s, i) => s.add(i), new Set())
    let seen = new Set()
    return arr.reduce((sums, num) => set.has(target - num) && !seen.has(num) ? (seen.add(num), seen.add(target - num), sums.concat([[num, target - num]])) : sums, []) 
 }