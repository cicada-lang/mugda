(data Boolean Type
  [true Boolean]
  [false Boolean])

(fn ife (Pi ((A Type)) (-> Boolean A A A))
  [(ife A true a b) a]
  [(ife A false a b) b])
