function findAddress(inputObject) {
    const defaultMissingValue = "__";
  
    if (!inputObject.hasOwnProperty('street')) {
      inputObject.street = defaultMissingValue;
    }
  
    if (!inputObject.hasOwnProperty('house')) {
      inputObject.house = defaultMissingValue;
    }
  
    if (!inputObject.hasOwnProperty('society')) {
      inputObject.society = defaultMissingValue;
    }
  
    const output = `${inputObject.street},${inputObject.house},${inputObject.society}`;
    return output;
  }
  
  const input1 = { street: 10, house: "15A", society: "Earth Perfect" };
  const input2 = { street: 10, society: "Earth Perfect" };
  const input3 = { street: 10 };
  
  const output1 = findAddress(input1);
  const output2 = findAddress(input2);
  const output3 = findAddress(input3);
  
  console.log(output1); // Output: 10,15A,Earth Perfect
  console.log(output2); // Output: 10,__,Earth Perfect
  console.log(output3); // Output: 10,__,__ 
  