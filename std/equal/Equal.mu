(data Equal ([A Type]) ([from A] [to A])
  [refl ([a A]) (Equal A a a)])

(import "../nat/index.mu" Nat zero add1 add)

(define add-x-zero-is-equal-to-x
  (Pi ([x Nat]) (Equal Nat (add x zero) x))
  (lambda (y) (refl Nat y)))

;; The follow is a wrong proof,
;; due to the definition of `add`.
(define add-zero-x-is-equal-to-x--wrong-proof
  (Pi ([x Nat]) (Equal Nat (add zero x) x))
  (lambda (y) (refl Nat y)))

(fn add1-equal
    (Pi ([x Nat] [y Nat])
      (-> (Equal Nat x y)
          (Equal Nat (add1 x) (add1 y))))
  ([(# x) (# x) (refl (# Nat) x)] (refl Nat (add1 x))))

(fn add-zero-x-is-equal-to-x
    (Pi ([x Nat]) (Equal Nat (add zero x) x))
  [(zero) (refl Nat zero)]
  [((add1 x))
   (add1-equal (add zero x) x (add-zero-x-is-equal-to-x x))])
