(import "Nat.mu" Nat zero add1)

(fn add (-> Nat Nat Nat)
  [(x (zero)) x]
  [(x (add1 y)) (add1 (add x y))])

(fn add-swap (-> Nat Nat Nat)
  [(x (zero)) x]
  [(x (add1 y)) (add1 (add-swap y x))])
