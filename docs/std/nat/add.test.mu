(import "Nat.mu" Nat zero add1)
(import "add.mu" add)

add
(add zero)
(add zero zero)

zero
(zero)
(add zero zero)

(add1 zero)
(add zero (add1 zero))
(add (add1 zero) zero)

(add (add1 zero) (add1 zero))
