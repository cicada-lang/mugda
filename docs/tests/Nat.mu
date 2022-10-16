(data Nat Type
  [zero Nat]
  [add1 (-> Nat Nat)])

(fn add (-> Nat Nat Nat)
  [(add x zero) x]
  [(add x (add1 y)) (add1 (add x y))])

(fn add' (-> Nat Nat Nat)
  [(add' x zero) x]
  [(add' x (add' y)) (add' (add y x))])

(data Boolean Type
  [true Boolean]
  [false Boolean])

(fn even (-> Nat Boolean)
  [(even zero) true]
  [(even (add1 x)) (odd x)])

(fn odd (-> Nat Boolean)
  [(odd zero) false]
  [(odd (add1 x)) (even x)])

