(import "./Nat.mu" Nat zero add1)

(data Vector ((+ A Type)) ((length Nat))
  (null ((A Type)) (Vector A zero))
  (cons ((A Type) (n Nat) (head A) (tail (Vector A n))) (Vector A (add1 n))))

;; We use `(#)` for inaccessible pattern.

(fn head (Pi ((A Type) (n Nat)) (-> (Vector A (add1 n)) A))
  (((# B) (# m) (cons B m x xl)) x))
