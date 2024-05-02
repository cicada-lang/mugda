(data Boolean () ()
  [true () Boolean]
  [false () Boolean])

(fn if (Pi ([A Type]) (-> Boolean A A A))
  [(A (true) a b) a]
  [(A (false) a b) b])

(define and (-> Boolean Boolean Boolean)
  (lambda (a b)
    (if Boolean a b false)))

(define or (-> Boolean Boolean Boolean)
  (lambda (a b)
    (if Boolean a true b)))
