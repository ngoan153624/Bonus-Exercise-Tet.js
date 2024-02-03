manadatory = () => { throw new Error('Thiếu tham số !'); };

sample = (param1 = manadatory()) => param1