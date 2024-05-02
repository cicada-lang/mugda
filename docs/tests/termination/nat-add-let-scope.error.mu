(import "../../std/nat/index.mu" Nat zero add1)

(fn add (-> Nat Nat Nat)
  [(x (zero)) x]
  [(x (add1 y))
   (let ([y Nat (add1 y)])
     (add1 (add x y)))])

TODO
