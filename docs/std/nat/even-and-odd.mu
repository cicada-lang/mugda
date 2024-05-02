(import "Nat.mu" Nat zero add1)
(import "../boolean/index.mu" Boolean true false)

(fn even? (-> Nat Boolean)
  [((zero)) true]
  [((add1 prev)) (odd? prev)])

(fn odd? (-> Nat Boolean)
  [((zero)) false]
  [((add1 prev)) (even? prev)])
