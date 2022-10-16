(data Equal (Pi ([A Type]) (-> A A Type))
  [refl (Pi ([a A]) (Equal A a a))])

(import Nat zero add1 add "./Nat.mu")

(let add-x-zero-is-equal-to-x
    (Pi ([x Nat]) (Equal Nat (add x zero) x))
  (lambda (y) (refl Nat y)))

;; The follow is a wrong proof,
;; due to the definition of `add`.
(let add-zero-x-is-equal-to-x--wrong-proof
    (Pi ([x Nat]) (Equal Nat (add zero x) x))
  (lambda (y) (refl Nat y)))

(fn add1-equal
    (Pi ([x Nat] [y Nat])
      (-> (Equal Nat x y)
          (Equal Nat (add1 x) (add1 y))))
  [(add1-equal (# x) (# x) (refl (# Nat) x)) (refl Nat (add1 x))])

;; Alternative syntax:
(claim add1-equal
  (Pi ([x Nat] [y Nat])
    (-> (Equal Nat x y)
        (Equal Nat (add1 x) (add1 y)))))
(case (add1-equal (# x) (# x) (refl (# Nat) x))
  (refl Nat (add1 x)))

(fn add-zero-x-is-equal-to-x
    (Pi ([x Nat]) (Equal Nat (add zero x) x))
  [(add-zero-x-is-equal-to-x zero) (refl Nat zero)]
  [(add-zero-x-is-equal-to-x (add1 x))
   (add1-equal (add zero x) x (add-zero-x-is-equal-to-x x))])
