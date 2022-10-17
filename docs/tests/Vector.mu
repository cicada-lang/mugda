(import Nat zero add1 "./Nat.mu")

(data Vector (Pi ([+ A Type]) (-> Nat Type))
  [null (Vector A zero)]
  [cons (Pi ([n Nat]) (-> A (Vector A n) (Vector A (add1 n))))])

;; We use `(#)` for inaccessible pattern.

(fn head (Pi ([A Type] [n Nat]) (-> (Vector A (add1 n)) A))
  [((# B) (# m) (cons B m x xl)) x])
