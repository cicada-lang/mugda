(import "Nat.mu" Nat add1 zero)
(import "../list/index.mu" List null cons)

(fn sum (-> (List Nat) Nat)
  [((null Nat)) zero]
  [((cons Nat (add1 prev) tail)) (add1 (sum (cons Nat prev tail)))]
  [((cons Nat zero tail)) (sum tail)])
