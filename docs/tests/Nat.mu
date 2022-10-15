(data Nat Type
  [zero Nat]
  [add1 (-> Nat Nat)])

(fn add (-> Nat Nat Nat)
  [(add x zero) x]
  [(add x (add1 y)) (add1 (add x y))])
