(data Boolean Type
  [true Boolean]
  [false Boolean])

(fn ife (Pi ((A Type)) (-> Boolean A A A))
  [(A (true) a b) a]
  [(A (false) a b) b])

(define and (-> Boolean Boolean Boolean)
  (lambda (a b)
    (ife Boolean a b false)))

(and true true)
(and true false)
(and false true)
(and false false)
