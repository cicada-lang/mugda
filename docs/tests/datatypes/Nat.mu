(data Nat Type
  (zero Nat)
  (add1 (-> Nat Nat)))

(fn add (-> Nat Nat Nat)
  ((x (zero)) x)
  ((x (add1 y)) (add1 (add x y))))
