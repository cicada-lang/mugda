(data Boolean Set
  [true Boolean]
  [false Boolean])

(fn ife (Pi ((A Set)) (-> Boolean A A A))
  [(ife A true a b) a]
  [(ife A false a b) b])
