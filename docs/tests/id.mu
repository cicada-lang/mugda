(let id (Pi ([A Type]) (-> A A))
  (lambda (A) (lambda (a) a)))

((id id) (id id))
