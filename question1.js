function twoSum(nums, target) {
    if (!Array.isArray(nums) || typeof target !== "number") {
      throw new Error("Invalid input: nums should be an array, target should be a number.");
    }
  
    const map = new Map();
  
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (map.has(complement)) {
        return [map.get(complement), i];
      }
  
      map.set(nums[i], i);
    }
  
    throw new Error("No solution found.");
  }
  
  try {
    console.log(twoSum([2, 7, 11, 15], 9)); 
  } catch (error) {
    console.error(error.message);
  }
  