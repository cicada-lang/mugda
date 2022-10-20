(data Boolean Type
  [true Boolean]
  [false Boolean])

(fn ife (Pi ((A Type)) (-> Boolean A A A))
  [(A (true) a b) a]
  [(A (false) a b) b])
