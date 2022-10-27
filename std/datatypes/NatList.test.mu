(import "List.mu" List null cons)
(import "Nat.mu" Nat add1 zero)

(fn sum (-> (List Nat) Nat)
  [((null Nat)) zero]
  [((cons Nat (add1 prev) tail)) (add1 (sum (cons Nat prev tail)))]
  [((cons Nat zero tail)) (sum tail)])
