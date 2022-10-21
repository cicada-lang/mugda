(data Boolean () ()
  (true Boolean)
  (false Boolean))

(fn ife (Pi ((A Type)) (-> Boolean A A A))
  ((A (true) a b) a)
  ((A (false) a b) b))

(define and (-> Boolean Boolean Boolean)
  (lambda (a b)
    (ife Boolean a b false)))

(define or (-> Boolean Boolean Boolean)
  (lambda (a b)
    (ife Boolean a true b)))
