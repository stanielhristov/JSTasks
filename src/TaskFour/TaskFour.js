const tree = {
  valueNode: 3,
  next: [
    {
      valueNode: 1,
      next: null
    },
    {
      valueNode: 3,
      next: null
    },
    {
      valueNode: 2,
      next: [
        {
          valueNode: 1,
          next: null
        },
        {
          valueNode: 5,
          next: null
        }
      ]
    }
  ]
};

function sumTree(tree) {
  if (!tree) return 0;


  let sum = tree.valueNode;

  if (tree.next && Array.isArray(tree.next)) {
    for (let child of tree.next) {
      sum += sumTree(child);
    }
  }

  return sum;
}

const totalSum = sumTree(tree);
console.log(`Сумата на всички възли в дървото е: ${totalSum}`);
