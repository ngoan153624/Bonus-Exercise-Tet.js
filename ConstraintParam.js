manadatory = () => { throw new Error('Thiếu tham số !'); };

sample = (param1 = manadatory()) => param1

try {
    console.log(sample('Hello')); 
    console.log(sample()); 
  } catch (error) {
    console.error(error.message); 
  }