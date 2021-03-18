require 'rspec'
require 'dessert'

=begin
Instructions: implement all of the pending specs (the `it` statements without blocks)! Be sure to look over the solutions when you're done.
=end

describe Dessert do
  let(:chef) { double("chef", name: "Phil") }
  let(:cookie) { Dessert.new("cookie", 40, chef) }


  describe "#initialize" do
    it "sets a type" do 
      expect(cookie.type).to eq("cookie")
    end

    it "sets a quantity" do
      expect(cookie.quantity).to eq(40)
    end

    it "starts ingredients as an empty array" do
      expect(cookie.ingredients).to eq([])
    end

    it "raises an argument error when given a non-integer quantity" do
      expect { Dessert.new("cookie", "asdf", chef) }.to raise_error(ArgumentError)
    end

  end

  describe "#add_ingredient" do
    it "adds an ingredient to the ingredients array" do
      cookie.add_ingredient('chocolate chips')
      expect(cookie.ingredients).to include('chocolate chips')
    end
  end

  describe "#mix!" do
    it "shuffles the ingredient array" do
    
    end

  end

  describe "#eat" do
    it "subtracts an amount from the quantity" do
      old_amount = cookie.quantity #40
      cookie.eat(3)
      expect(cookie.quantity).to eq(37)
    end

    it "raises an error if the amount is greater than the quantity" do
      expect {cookie.eat(1200) }.to raise_error(StandardError)
    end
  end

  describe "#serve" do
    it "contains the titleized version of the chef's name" do
      allow(chef).to receive(:titleize).and_return("Chef Phil the Great Baker")
      serv = cookie.serve
      expect(serv).to include("Chef Phil the Great Baker")
    end
  end

  describe "#make_more" do
    it "calls bake on the dessert's chef with the dessert passed in" do
      expect(chef).to receive(:bake).with(cookie)
      brownie.make_more
    end
  end
end
