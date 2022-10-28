(data List ([+ A Type]) ()
  [null () (List A)]
  [cons ([head A] [tail (List A)]) (List A)])

(import "../nat/index.mu" Nat zero add1)

(fn length (Pi ([A Type]) (-> (List A) Nat))
  [(A (null A)) zero]
  [(A (cons A head tail)) (add1 (length A tail))])
