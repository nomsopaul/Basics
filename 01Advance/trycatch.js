const convertToRs = (dollar) => {
    if (typeof dollar === 'number') {
        return dollar * 64
    } else {
        throw Error('Invalid amount')
    }
}

try {
  const myValue = convertToRs(5)
  console.log(myValue);
} catch (e) {
    console.log(e);
}


