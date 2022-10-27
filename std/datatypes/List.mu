(data List ([+ A Type]) ()
  [null () (List A)]
  [cons ([head A] [tail (List A)]) (List A)])

(import "Nat.mu" Nat zero add1)

(fn length (Pi ([A Type]) (-> (List A) Nat))
  [(A (null A)) zero]
  [(A (cons A head tail)) (add1 (length A tail))])

(fn sum (-> (List Nat) Nat)
  [((null Nat)) zero]
  [((cons Nat (add1 prev) tail)) (add1 (sum (cons Nat prev tail)))]
  [((cons Nat zero tail)) (sum tail)])
