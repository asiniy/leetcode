// https://leetcode.com/problems/remove-element

function removeElement(nums: number[], val: number): number {
    let left = 0;
    let right = 0;

    while (right < nums.length) {
        while (nums[right] === val) {
            right += 1
        }

        nums[left] = nums[right]
        left += 1
        right += 1
    }

    return left
}

// removeElement([3,2,2,3], 3)
