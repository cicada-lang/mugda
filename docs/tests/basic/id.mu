(define idType Type
  (Pi ([A Type]) (-> A A)))

(define id idType
  (lambda (A) (lambda (a) a)))
