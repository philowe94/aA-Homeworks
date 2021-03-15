require "set"

class GraphNode

    attr_accessor :value, :neighbors
    
    def initialize(value)
        @value = value
        @neighbors = []
    end

    def neighbors=(neighbors_arr)
        neighbors_arr.each do |neighbor|
            @neighbors << neighbor
        end
    end

   
end

def bfs(starting_node, target_value)

    queue = []
    queue.push(starting_node)
    visited = Set.new

    until queue.empty?
        current_node = queue.shift
        if !visited.include?(current_node)
            val = current_node.value
            if val == target_value
                return current_node
            else
                visited.add(current_node)
                current_node.neighbors.each { |child| queue << child }
            end
        end
    end
    nil
        
end

a = GraphNode.new('a')
b = GraphNode.new('b')
c = GraphNode.new('c')
d = GraphNode.new('d')
e = GraphNode.new('e')
f = GraphNode.new('f')
a.neighbors = [b, c, e]
c.neighbors = [b, d]
e.neighbors = [a]
f.neighbors = [e]

p bfs(a, "b")
p bfs(a, "f")