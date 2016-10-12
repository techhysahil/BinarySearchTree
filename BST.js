var DT = {};
	//Binnary Search Tree Constructor
	DT.BST = function(){
		this.root = null;
		this.tree = null;
	};

	/*******************************
			Private function
	*******************************/

	//Add Function
	DT.BST.prototype.add = function(x){
		var flag = true;

		var data = this.tree;
		if(this.root === null){
			this.tree = {
				element : x,
				leftchild : null,
				rightchild : null
			};
			this.root = x;
			flag = false;
		}else{
			while(flag){
				if(data.element === x){
					return false;
				}else if(x > data.element){
					if(data.rightchild === null){
						data.rightchild = {
							element : x,
							leftchild : null,
							rightchild : null		
						};
						flag = false;
					}else{
						data = data.rightchild;
					}
					
				}else if(x < data.element){
					if(data.leftchild === null){
						data.leftchild = {
							element : x,
							leftchild : null,
							rightchild : null		
						};
						flag = false;
					}else{
						data = data.leftchild;
					}
					
				}	
			}
			
		}
	};
	//Contains Function
	DT.BST.prototype.contains = function(x){
		var flag = true,
			node = this.tree;

		while(flag){
			if(node != null){
				if(x === node.element){
					flag = false;
					return true;
				}else if(x > node.element){
					node = node.rightchildchild;
				}else if(x < node.element){
					node = node.leftchildchild;
				}	
			}else{
				return false;
			}
			
		}
	};
	//Find minValue Function
	DT.BST.prototype.minValue = function(){
		var flag = true,
			node = this.tree;

			if(node != null){
				while(flag){
					if(node.leftchildchild){
						node = node.leftchildchild;
					}else{
						flag = false;
						return node.element;
					}
				}
			}else{
				return false;
			}
	};
	//Find maxValue Function
	DT.BST.prototype.maxValue = function(){
		var flag = true,
			node = this.tree;

			if(node != null){
				while(flag){
					if(node.rightchildchild){
						node = node.rightchildchild;
					}else{
						flag = false;
						return node.element;
					}
				}
			}else{
				return false;
			}
	};
	//Delete BST Function
	DT.BST.prototype.removeTree = function(){
		this.root = null;
		this.tree = null;
	};
	//Traversal BST tree Function
	DT.BST.prototype.traversalTree = function(options,callback){
		var obj = this.tree;

		//Normal BST tree traversal
		if(options.type === "inorder"){
			function inOrder(obj){
		        if (obj){

		            if (obj.left !== null){
		                inOrder(obj.leftchild);
		            }            

		            callback.call(this,obj.element);

		            if (obj.right !== null){
		                inOrder(obj.rightchild);
		            }
		        }
		    }
	        //start with the root
	        inOrder(obj);
		}
		if(options.type === "preorder"){
			function preOrder(obj){
		        if (obj){

		        	callback.call(this,obj.element);

		            if (obj.left !== null){
		                preOrder(obj.leftchild);
		            }            

		            

		            if (obj.right !== null){
		                preOrder(obj.rightchild);
		            }

		        }
		    }
	        //start with the root
	        preOrder(obj);
		}
		if(options.type === "postorder"){
			function postOrder(obj){
		        if (obj){

		            if (obj.left !== null){
		                postOrder(obj.leftchild);
		            }            

		            

		            if (obj.right !== null){
		                postOrder(obj.rightchild);
		            }

		            callback.call(this,obj.element);

		        }
		    }
	        //start with the root
	        postOrder(obj);
		}
	};

	//Get BST size Function
	DT.BST.prototype.size = function(callback){
		var obj = this.tree;
		var size = 0;
		function inOrder(obj){
	        if (obj){

	            if (obj.left !== null){
	                inOrder(obj.leftchild);
	            }            

	            // callback.call(this,obj.element);
	            size = size+1;

	            if (obj.right !== null){
	                inOrder(obj.rightchild);
	            }
	        }
	    }
        //start with the root
        inOrder(obj);

        return size;
	};

	//Convert BST tree to Array Function
	DT.BST.prototype.toArray = function(){
		var obj = this.tree,
			arr = [];
		function inOrder(obj){
	        if (obj){

	            if (obj.left !== null){
	                inOrder(obj.leftchild);
	            }            

	            // callback.call(this,obj.element);
	            arr.push(obj.element);

	            if (obj.right !== null){
	                inOrder(obj.rightchild);
	            }
	        }
	    }
        //start with the root
        inOrder(obj);

        return arr;
	};

	//Convert BST tree to String Function
	DT.BST.prototype.toString = function(){
		var obj = this.tree,
			arr = [];
		function inOrder(obj){
	        if (obj){

	            if (obj.left !== null){
	                inOrder(obj.leftchild);
	            }            

	            // callback.call(this,obj.element);
	            arr.push(obj.element);

	            if (obj.right !== null){
	                inOrder(obj.rightchild);
	            }
	        }
	    }
        //start with the root
        inOrder(obj);

        return arr.toString();
	};

	//Convert BST tree to String Function
	DT.BST.prototype.maxDepth = function(){
		var obj = this.tree,
			size = 0,
			PathArr = [],
			traverseTopNode = false,
			root = this.root;

		function inOrder(obj){

	        if (obj){
	        	if (obj.leftchild !== null){
	        		size = size+1;
	                inOrder(obj.leftchild);
	            }else{
	            	PathArr.push(size);
	            }            

	            if(obj.element === root){
	        		traverseTopNode = true;
	        		size = 1;
	        	}
	            if (obj.rightchild !== null){
	                size = size+1;
	                inOrder(obj.rightchild);

	            }else{
	            	PathArr.push(size);
	            	size = size -1;
	            }

	        }else{
	        	return 0;
	        }
	    }

        //start with the root
        inOrder(obj);

        PathArr.sort();
        PathArr.reverse();
        return PathArr[0];
	};

	//Chech tree is BST Function
	DT.BST.prototype.isBST = function(obj){
		var node = obj.tree,
			minValue = this.minValue(),
			maxValue = this.maxValue();

		function isSearchable(node, minValue,maxValue){
			if(node && node.element){
				if(node.element < minValue || node.element > maxValue){
					return false;
				}
				if(node.leftchildchild){
					return isSearchable(node.leftchildchild,minValue,node.element);
				}
				if(node.rightchildchild){
					return isSearchable(node.rightchildchild,node.element,maxValue);
				}	
			}else{
				return false;
			}

			return true;
		}
		var res = isSearchable(node,minValue,maxValue);	
		return res;
	};



	DT.BST.prototype.remove = function(value){
    
        var found       = false,
            parent      = null,
            node     = this.tree,
            childCount,
            replacement,
            replacementParent;
            
        //make sure there's a node to search
        while(!found && node){
        
            //if the value is less than the node node's, go left
            if (value < node.element){
                parent = node;
                node = node.leftchild;
                
            //if the value is greater than the node node's, go right
            } else if (value > node.element){
                parent = node;
                node = node.rightchild;
                
            //values are equal, found it!
            } else {
                found = true;
            }
        }
        
        //only proceed if the node was found
        if (found){
        
            //figure out how many children
            childCount = (node.leftchild !== null ? 1 : 0) + (node.rightchild !== null ? 1 : 0);
        
            //special case: the value is at the root
            if (node === this.tree){
                switch(childCount){
                
                    //no children, just erase the root
                    case 0:
                        this.tree = null;
                        this.root = null;
                        break;
                        
                    //one child, use one as the root
                    case 1:
                        this.tree = (node.rightchild === null ? node.leftchild : node.rightchild);
                        break;
                        
                    //two children, little work to do
                    case 2:

                        //new root will be the old root's left child...maybe
                        replacement = this.tree.leftchild;
                        
                        //find the right-most leaf node to be the real new root
                        while (replacement.rightchild !== null){
                            replacementParent = replacement;
                            replacement = replacement.rightchild;
                        }
         
                        //it's not the first node on the left
                        if (replacementParent !== null){
                        
                            //remove the new root from it's previous position
                            replacementParent.rightchild = replacement.leftchild;
                            
                            //give the new root all of the old root's children
                            replacement.rightchild = this.tree.rightchild;
                            replacement.leftchild = this.tree.leftchild;
                        } else {
                        
                            //just assign the children
                            replacement.rightchild = this.tree.rightchild;
                        }
                        
                        //officially assign new root
                        this.tree = replacement;
                        this.root = replacement.element;
                    
                    //no default
                
                }        

            //non-root values
            } else {
            
                switch (childCount){
                
                    //no children, just remove it from the parent
                    case 0:
                        //if the node value is less than its parent's, null out the left pointer
                        if (node.element < parent.element){
                            parent.leftchild = null;
                            
                        //if the node value is greater than its parent's, null out the right pointer
                        } else {
                            parent.rightchild = null;
                        }
                        break;
                        
                    //one child, just reassign to parent
                    case 1:
                        //if the node value is less than its parent's, reset the left pointer
                        if (node.element < parent.element){
                            parent.leftchild = (node.leftchild === null ? node.rightchild : node.leftchild);
                            
                        //if the node value is greater than its parent's, reset the right pointer
                        } else {
                            parent.rightchild = (node.leftchild === null ? node.rightchild : node.leftchild);
                        }
                        break;    

                    //two children, a bit more complicated
                    case 2:
                    
                        //reset pointers for new traversal
                        replacement = node.leftchild;
                        replacementParent = node;
                        
                        //find the right-most node
                        while(replacement.rightchild !== null){
                            replacementParent = replacement;
                            replacement = replacement.rightchild;                            
                        }
                    
                        if (replacementParent.rightchild === replacement) {
                             replacementParent.rightchild = replacement.leftchild;
                         } else { 
                             //replacement will be on the left when the left most subtree
                             //of the node to remove has no children to the right
                             replacementParent.leftchild = replacement.leftchild;
                         }
                        
                        //assign children to the replacement
                        replacement.rightchild = node.rightchild;
                        replacement.leftchild = node.leftchild;
                        
                        //place the replacement in the right spot
                        if (node.element < parent.element){
                            parent.leftchild = replacement;
                        } else {
                            parent.rightchild = replacement;
                        }                        
                                        
                    //no default
                
                
                }
            
            }
        
        }   
    };
