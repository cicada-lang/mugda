(import "List.mu" List null cons length)
(import "Nat.mu" Nat zero)

(null Nat)
(cons Nat zero (null Nat))
(cons Nat zero (cons Nat zero (null Nat)))

(length Nat (cons Nat zero (cons Nat zero (null Nat))))
