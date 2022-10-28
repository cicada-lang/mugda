(data Nat () ()
  [zero () Nat]
  [add1 ([prev Nat]) Nat])

(fn add (-> Nat Nat Nat)
  [(x (zero)) x]
  [(x (add1 y)) (add1 (add x y))])

(fn add-swap (-> Nat Nat Nat)
  [(x (zero)) x]
  [(x (add1 y)) (add1 (add-swap y x))])

(import "../boolean/index.mu" Boolean true false)

(fn even? (-> Nat Boolean)
  [((zero)) true]
  [((add1 prev)) (odd? prev)])

(fn odd? (-> Nat Boolean)
  [((zero)) false]
  [((add1 prev)) (even? prev)])
