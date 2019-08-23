# btuerker.github.io

<details>
  <summary><b>Hint: First hint!</b></summary>
  :) :) :)
  ```ruby
    puts "Hello, World!"
  ```
  
</details>

<details>
  <summary><b>Hello Emily :)</b></summary>
  :) :) :)
  ```ruby
    puts "Hello, World!"
  ```
  
</details>

<details>
  <summary><b style="color: blue;">Hint:</b></summary>
  
  :) :) :)
  ```ruby
    class BST
      # accessors and constructor omitted
      # pre_order method omitted

      def insert new_node
        # base case: if the tree is empty, set new_node as the root element
        # no need to iterate at all, then end the function call
        if @root.nil?
          @root = new_node
          return
        end
        # Iteration is the same with the above solution
        current = @root
        until current.nil?
          if new_node.data < current.data
            # without using the parent variable, in here:
            # append element and end the function if the next current is nil
            if current.left.nil?
              current.left = new_node
              return
            end
            current = current.left
          elsif new_node.data > current.data
            # without using the parent variable, in here:
            # append element and end the function if the next current is nil
            if current.right.nil?
              current.right = new_node
              return
            end
            current = current.right
          end
        end
      end
    end

    # Basic usage
    def binary_search_tree(array)
      tree = BST.new
      array.each { |e| tree.insert(Node.new(e)) }
      tree.pre_order
    end
  ```
  
</details>

