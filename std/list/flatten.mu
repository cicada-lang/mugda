(import "List.mu" List null cons)

(fn flatten (Pi ([A Type]) (-> (List (List A)) (List A)))
  [(A (null (# (List A))))
   (null A)]
  [(A (cons (# (List A)) (null (# A)) rest))
   (flatten A rest)]
  [(A (cons (# (List A)) (cons (# A) head tail) rest))
   (cons A head (flatten A (cons (List A) tail rest)))])
